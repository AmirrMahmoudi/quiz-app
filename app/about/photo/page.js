import Frame from "@/components/modal/Frame";

export default function PhotoPage() {
  const photo =
    "https://lh3.googleusercontent.com/ogw/AKPQZvxOkzt7k2r92-Pjt8mVrI1VHWmICwnCh7mab7ZC=l320";

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Frame photo={photo} />
      </div>
    </div>
  );
}
