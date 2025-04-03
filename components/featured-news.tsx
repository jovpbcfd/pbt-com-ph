export default function FeaturedNews() {
  return (
    <section className="max-w-[1230px] mx-auto text-white p-2 md:p-0">
      <div className="my-2 md:mt-10">
        <h2 className="font-[900] text-lg md:text-xl lg:text-2xl">
          Keep informed with Panalobet News
        </h2>
        <div className="flex items-center flex-col-reverse gap-2 mt-2 md:my-4 lg:justify-center lg:flex-row">
          <div className="w-full text-justify md:w-[50%]">
            <p className="mb-2 md:mb-4">
              At Panalobet, we think that great customer care is mostly
              responsible for great gaming experience. Our committed customer
              support staff is here around-the-clock ready to help with any
              queries or issues you might have. We are here to assist with
              account management, deposits, withdrawals, technical problems, or
              needs otherwise.
            </p>
            <p className="mb-2 md:mb-4">
              Call, email, or live chat with customer support agents. Our staff
              is friendly, experienced, and competent to react fast and
              forcefully to guarantee that your gaming experience is as perfect
              as it may be.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:gap-3 md:ml-10 md:rounded-md lg:grid-cols-2">
            <div>
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[364px] md:h-[203px]">
                Image
              </div>
              <div className="md:py-3">
                <h3 className="font-[800] md:text-xl">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, maiores!
                </p>
              </div>
            </div>
            <div>
              <div className="border-1 border-dashed flex items-center justify-center rounded-md md:w-[364px] md:h-[203px]">
                Image
              </div>
              <div className="md:py-3">
                <h3 className="font-[800] md:text-xl">Title</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, maiores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
