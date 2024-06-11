function page() {
  return (
    <main className="py-20 bg-secondary min-h-full">
      <h2 className="text-gray-700  font-semibold">طريقة التركيب</h2>

      <div className="flex flex-col items-center gap-6 mt-16">
        <button className="border-primary rounded-xl text-primary font-semibold border py-2 px-6 w-40">
          <a
            href="https://youtu.be/7GeIGsEoltU?si=Z35Rb7o_8ZtercCc"
            target="_blank"
          >
            الخزان السفلي
          </a>
        </button>
        <button className="border-primary rounded-xl text-primary font-semibold border py-2 px-6 w-40">
          <a
            href="https://youtu.be/2g__q2PSc3k?si=2Spue4KNGWpZQ8w8"
            target="_blank"
          >
            الخزان العلوي
          </a>
        </button>
      </div>
    </main>
  );
}

export default page;
