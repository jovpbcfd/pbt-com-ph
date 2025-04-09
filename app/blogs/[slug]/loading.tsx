export default function Loading() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="max-w-[86.25rem] mx-auto grid place-content-center grid-rows-[auto_1fr_auto] md:grid-rows-1 md:grid-cols-[auto_50rem_auto]">
        <aside className="h-auto hidden w-[237px] md:sticky md:top-[96px] md:h-[calc(100vh-30px)] lg:block">
          <div className="animate-pulse rounded-lg bg-gray-700 p-4 mb-6 h-32" />
          <div className="flex flex-col gap-8">
            <nav className="relative">
              <ul className="max-h-[70vh] space-y-2.5 overflow-y-auto py-2 text-md animate-pulse">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i}>
                    <div className="h-4 w-full bg-gray-600 rounded-md" />
                  </li>
                ))}
              </ul>

              <div className="absolute bottom-[-20px] left-0 h-[1px] w-full bg-stone-300" />
            </nav>

            <div className="animate-pulse">
              <div className="h-12 w-full bg-gray-600 rounded-md" />
            </div>
          </div>
        </aside>
        <article className="mx-auto w-full flex flex-col gap-10 text-black md:max-w-[44rem]  md:mx-10">
          <header className="mt-4 p-4">
            <div className="h-8 w-3/4 bg-gray-700 rounded-md mb-4" />

            <div className="flex items-center gap-4 mt-8">
              <div className="h-12 w-12 bg-gray-700 rounded-full" />
              <div className="flex flex-col gap-2">
                <div className="h-4 w-1/2 bg-gray-700 rounded-md" />
                <div className="h-3 w-3/4 bg-gray-700 rounded-md" />
              </div>
            </div>
          </header>

          <div className="blog-content text-white text-justify space-y-4">
            <div className="bg-gray-700 rounded-md md:w-[705px] md:h-[405px]"></div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-4 w-full bg-gray-700 rounded-md" />
            ))}
          </div>
        </article>
        <aside className="h-auto hidden md:sticky md:top-[96px] md:h-[calc(100vh-30px)] lg:block">
          <div className="flex flex-col items-center gap-6 rounded-md shadow-xs">
            <nav className="pt-4">
              <ul className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li key={i}>
                    <div className="flex items-center flex-col p-4 bg-white animate-pulse">
                      <div className="h-[170px] w-[280px] bg-gray-700 rounded-md" />

                      <div className="w-full md:w-full mt-2 space-y-2">
                        <div className="h-4 w-3/4 bg-gray-700 rounded-md" />
                        {/* <div className="h-3 w-full bg-gray-700 rounded-md" /> */}
                        <div className="text-sm text-gray-500 flex gap-1">
                          <div className="h-3 w-10 bg-gray-700 rounded-md" />
                          <div className="h-3 w-5 bg-gray-700 rounded-md" />
                          <div className="h-3 w-16 bg-gray-700 rounded-md" />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </section>
  );
}
