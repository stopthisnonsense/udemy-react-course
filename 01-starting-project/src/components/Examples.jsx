import { useState } from "react";
import { TabButton } from "./TabButton"
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
import Section from "./Section";
export default function Examples() {
    const [tabContent, setTabContent] = useState(null);
    function handleSelect(selectedButton) {

        console.log(selectedButton);
        setTabContent(selectedButton);
    }
    return(
        <Section title='Examples' id='examples'>
            <Tabs
            menu={
                <>
                    <TabButton isSelected={tabContent === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={tabContent === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={tabContent === 'props'}  onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={tabContent === 'state'}  onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {!tabContent ? <p>Please select a topic</p> : null}
                {tabContent ? ( <div id="tab-content"><h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>{EXAMPLES[tabContent].code}</pre></div>) : null}
            </Tabs>



        </Section>
    )

}