function StatsPreviewCard() {
    return (
        <main className="flex flex-col md:flex-row-reverse text-white w-1/2 my-10 md:w-2/3 md:max-w-screen-md">
            <div className="bg-softViolet rounded-t-2xl md:rounded-t-none md:rounded-r-2xl md:flex-1">
                <img
                    src="/image-header-mobile.jpg"
                    className="mix-blend-multiply opacity-75 rounded-t-2xl md:hidden"
                    alt="image"
                />
                <img
                    src="/image-header-desktop.jpg"
                    className="hidden mix-blend-multiply opacity-75 rounded-t-2xl md:h-full md:flex md:rounded-r-2xl md:object-cover"
                    alt="image"
                />
            </div>
            <div className="bg-darkDesaturatedBlue p-10 text-center rounded-b-2xl md:rounded-l-2xl md:rounded-br-none md:flex-1 md:text-left">
                <h2 className="text-xl md:text-2xl font-bold">
                    Get <span className="text-softViolet">insights</span> that
                    help your business grow.
                </h2>
                <p className="font-inter mt-5 text-xs text-slightlyTransparentWhite leading-relaxed">
                    Discover the benefits of data analytics and make better
                    decisions regarding revenue, customer experience, and
                    overall efficiency.
                </p>
                <div className="flex flex-col space-y-5 mt-5 md:flex-row md:space-x-10 md:space-y-0">
                    <div>
                        <div className="font-bold">10k+</div>
                        <div className="text-slightlyTransparentWhite text-xxs tracking-widest">
                            COMPANIES
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">314</div>
                        <div className="text-slightlyTransparentWhite text-xxs tracking-widest">
                            TEMPLATES
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">12M+</div>
                        <div className="text-slightlyTransparentWhite text-xxs tracking-widest">
                            QUERIES
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default StatsPreviewCard
