function Container({children}) {
    return (
        <section className="w-screen p-2">
            <div className="max-w-3xl w-md h-[35rem] overflow-auto overscroll-contain rounded mx-auto p-2 bg-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Container;