import Image from 'next/image'
import myImage from '../public/horizon.png'

export default function Beta() {
  return (
    <>
    <div className="img-box rotate">
      <Image 
        src={myImage} 
        alt="Image of the Black Hole (Black Hole)" 
        width={396}
        height={390} />
    </div>
    </>
  );
}