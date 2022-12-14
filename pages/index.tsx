import Link from "next/link";

export default function Home() {
  const blog = [
    {link:'first',name:'blog post first'},
    {link:'second',name:'blog post second'},
    {link:'third',name:'blog post third'}
  ]
  return (
    <div>
      <h1>Hello Next JS</h1>
      <ul>
      <Link href='portfolio'>Portfolio</Link>
      </ul>
      <ul>
      <Link href='about'>About</Link>
      </ul>
      <ul>
      <Link href='client'>Client</Link>
      </ul>
      <ul>
        {blog.map((details:any)=>{
          return (
            <li>
            <Link href={`client/${details?.link}`}>{details?.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
