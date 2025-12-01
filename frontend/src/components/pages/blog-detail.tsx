import { Button } from "@/components/ui/button";
import { FiCopy } from "react-icons/fi";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
export default function BlogDetailPage() {
  return (
    <>
      <section
        id="detail-blog"
        className="container w-full mx-auto mt-25 min-h-screen"
      >
        <main className="flex flex-col w-full gap-4 px-4 md:px-15">
          <div className="px-3 md:px-8 lg:px-35 xl:px-60">
            <h4 className="scroll-m-20 text-sm font-semibold tracking-tight text-destructive">
              WEBVIEW
            </h4>
            <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance lg:text-pretty lg:pt-3">
              Taxing Laughter: The Joke Tax Chronicles and Its Impact on Comedy
              as an Art Form
            </h1>
            <h4 className="scroll-m-20 text-md font-semibold tracking-tight my-10">
              Design
            </h4>
            <div className="flex gap-3 w-full my-4 justify-center">
              <img
                src="https://i.pravatar.cc/50?img=1"
                className="w-10 h-10 rounded-full object-cover md:w-15 md:h-15"
              />
              <div className="flex flex-col items-left md:justify-evenly">
                <span className="text-base font-medium md:text-lg">
                  Malika Gedhang
                </span>
                <span className="text-xs text-muted-foreground md:text-md">
                  25 Nov 2025
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661596686441-611034b8077e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-48 w-96 object-cover md:w-full md:h-72 lg:h-102 xl:h-120"
          />
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify text-secondary-foreground lg:px-35 lg:text-left xl:px-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nam velit vitae, totam quod magni omnis ipsa
            voluptates. Consequatur perferendis quos adipisci soluta dolores
            repellendus, doloremque nobis voluptatem quae delectus!
          </p>
          <div className="border-muted-foreground border-y py-8 mt-3 lg:mx-35 lg:text-left xl:mx-60">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              The Joke Tax
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-justify text-secondary-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
              magnam ipsum amet a eum cum asperiores odio optio error maxime.
              Saepe similique laudantium accusamus, repudiandae perspiciatis est
              culpa doloremque consequuntur nobis corporis quia, molestiae, eos
              quibusdam velit non quas alias commodi id eaque reiciendis totam.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify text-secondary-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              illo harum delectus velit quam debitis vitae voluptas quae sint
              aspernatur distinctio dicta consectetur et deserunt eius facilis
              ex eos, est a explicabo sequi consequatur. Unde illo nesciunt
              fugit deserunt ut, error, aperiam harum recusandae autem vitae
              velit at aliquid temporibus?
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify text-secondary-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab
              iste quisquam cum, voluptatibus nostrum voluptas voluptatem
              consectetur eos molestiae nulla pariatur.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify text-secondary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit
              quis tempore, aspernatur consequuntur consequatur.
            </p>
          </div>
          <div className="flex gap-2 my-6 justify-end text-secondary-foreground lg:mx-35 xl:mx-60">
            <Button variant="outline" size="sm">
              <FiCopy /> Salin Link
            </Button>
            <Button variant="outline" size="sm">
              <FaTwitter />
            </Button>
            <Button variant="outline" size="sm">
              <FaFacebook />
            </Button>
            <Button variant="outline" size="sm">
              <FaLinkedin />
            </Button>
          </div>
        </main>
      </section>
    </>
  );
}
