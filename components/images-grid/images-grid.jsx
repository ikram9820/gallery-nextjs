import Image from "next/image";
function ImagesGrid({images}) {

  return (
    <section className="p-5">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
         
         <div class="w-full">
          <Image
            key={index}
            className="w-full h-40 md:h-48 object-cover rounded-lg shadow-lg"
            src={image}
            alt={`Image ${index}`}
            height={200}
            width={300}
          />
           <p class="p-4 text-center text-sm font-medium">{image}</p>
        </div>
        ))}
      </div>
    </section>
  );
}

export default ImagesGrid;
