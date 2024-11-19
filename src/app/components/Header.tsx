import Link from "next/link";



export default function Header(data:any) {
    return (
        <>
        <div className= {`${data.font.className} ul-parents`}>
            <ul className="links">
                <li className="li-li"><Link href="">Works</Link></li>
                <li className="li-li"><Link href="">Blog</Link></li>
                <li className="li-li"><Link href="">Contact</Link></li>
            </ul>
        </div>
        </>
    );
  }
  
