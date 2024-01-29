import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[],
  })

  function handleAddTask() {

  }
  function handleDeleteTask() {

  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id != prevState.selectedProjectId)
      }
    })
  }

  function handleStartProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onProjectAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }

  console.log(projectsState);

  function handleAddProject(projectData) {
    setProjectsState( prevState => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject ]
      }
    } )
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartProject} projects={projectsState.projects} onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
