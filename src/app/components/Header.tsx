import Link from "next/link";
interface HeaderParams {
    font: {
        className:string;
    };
  }



export default function Header({font} : HeaderParams) {
    return (
        <>
        <div className= {`${font.className} ul-parents`}>
            <ul className="links">
                <li className="li-li"><Link href="#">Works</Link></li>
                <li className="li-li"><Link href="#">Blog</Link></li>
                <li className="li-li"><Link href="#">Contact</Link></li>
            </ul>
        </div>
        </>
    );
  }
  
