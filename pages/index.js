import ImagesGrid from "@/components/images-grid/images-grid";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
];

function HomePage() {
  return <ImagesGrid images={images} />;
}

export default HomePage;
