function Container() {
    return (
        <section class="w-screen p-2">
            <div class="max-w-3xl w-md h-[35rem] overflow-auto overscroll-contain rounded mx-auto p-2 bg-gray-100">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Container;