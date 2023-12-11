import Frame from "@/components/modal/Frame";
import Modal from "@/components/modal/Modal";

export default function PhotoModal() {
  const photo =
    "https://lh3.googleusercontent.com/ogw/AKPQZvxOkzt7k2r92-Pjt8mVrI1VHWmICwnCh7mab7ZC=l320";
  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
