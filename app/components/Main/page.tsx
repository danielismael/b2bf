const MainDirectDistributor = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <main className="px-25px md:px-45px min-h-screen bg-white py-25px md:py-45px">
            {children}
        </main>
    )
}

export default MainDirectDistributor;