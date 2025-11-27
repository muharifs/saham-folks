export default function BlogDetailPage() {
  return (
    <>
      <section
        id="dtail-blog"
        className="container w-full mx-auto mt-25 min-h-screen"
      >
        <main className="flex flex-col lg:flex-row w-full gap-4 px-4 md:px-15">
          <div className="px-8">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-destructive">
              People stopped telling jokes
            </h4>
            <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
              Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-primary my-5">
              Design
            </h4>
            <div className="flex  gap-3 w-full my-4 justify-center">
              <img
                src="https://i.pravatar.cc/50?img=1"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex flex-col items-left">
                <span className="text-base font-medium">Malika Gedhang</span>
                <span className="text-xs text-muted-foreground">
                  25 Nov 2025
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-48 w-96 object-fill"
          />
        </main>
      </section>
    </>
  );
}
