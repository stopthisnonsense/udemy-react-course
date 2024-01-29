export default function Tabs({children, menu, MenuContainer = 'menu'}) {
    return (
    <>
    <MenuContainer>
        {menu}
    </MenuContainer>
    {children}
    </>)
}