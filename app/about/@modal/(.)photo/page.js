import Frame from "../../components/frame";
import Modal from "../../components/modal";

export default function PhotoModal() {
  const photo =
    "https://lh3.googleusercontent.com/ogw/AKPQZvxOkzt7k2r92-Pjt8mVrI1VHWmICwnCh7mab7ZC=l320";
  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
