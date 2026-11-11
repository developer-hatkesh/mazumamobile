"use client";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
const Link = ({href,...props}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {href:string}) => <a href={href} {...props}/>;

const menus = [
  { label:"Sell my mobile", href:"/sell/phones", columns:[
    ["Apple iPhone","iPhone 17","iPhone 16","iPhone 15","iPhone 14","iPhone 13"],
    ["Google Pixel","Pixel 10","Pixel 9","Pixel 8","Pixel 7"],
    ["Browse", "All phones","Popular models","Sell a faulty phone"]
  ]},
  { label:"Sell my tablet", href:"/sell/tablets", columns:[
    ["Apple iPad","iPad Pro","iPad Air","iPad","iPad mini"],
    ["Google","Pixel Tablet"],
    ["Browse","All tablets","Wi-Fi models","Cellular models"]
  ]},
  { label:"Sell my watch", href:"/sell/watches", columns:[
    ["Apple Watch","Watch Ultra","Watch Series 11","Watch Series 10"],
    ["Google","Pixel Watch 4","Pixel Watch 3"],
    ["Browse","All watches","GPS + Cellular"]
  ]},
  { label:"Sell my Mac", href:"/sell/macs", columns:[
    ["MacBook","MacBook Pro","MacBook Air"],
    ["Desktop Mac","iMac M4","iMac M3"],
    ["Browse","All Macs","Apple silicon"]
  ]},
  { label:"Sell my console", href:"/sell/consoles", columns:[
    ["PlayStation","PS5 Pro","PS5"],
    ["Xbox","Xbox Series X","Xbox Series S"],
    ["Nintendo","Switch 2","Switch OLED"]
  ]}
];
export function SiteHeader(){
 const [open,setOpen]=useState<string|null>(null); const [mobile,setMobile]=useState(false);
 return <><div className="topbar"><span>Free tracked postage</span><span>Quotes held for 14 days</span><span>Fast, straightforward payment</span></div>
 <header className="header mega-header">
  <Link className="brand" href="/"><span className="brand-mark">A</span>ABC DEMO</Link>
  <nav className={mobile?"nav main-nav open":"nav main-nav"}>
   {menus.map(m=><div className="nav-group" key={m.label} onMouseEnter={()=>setOpen(m.label)} onMouseLeave={()=>setOpen(null)}>
    <Link href={m.href}>{m.label}<ChevronDown size={13}/></Link>
    {open===m.label&&<div className="mega-menu">
      <div className="mega-intro"><span className="kicker">TRADE IN</span><h3>{m.label}</h3><p>Choose your device and get an instant estimate in a few simple steps.</p><Link href={m.href}>View all <span>→</span></Link></div>
      {m.columns.map((col,i)=><div className="mega-column" key={i}><strong>{col[0]}</strong>{col.slice(1).map((x,j)=><Link key={x} href={j===0&&i===0&&m.href==="/sell/phones"?"/sell/iphone-17":m.href}>{x}</Link>)}</div>)}
      <div className="mega-promo"><b>Not sure which model?</b><p>Search by device name or browse every model.</p><Search/></div>
    </div>}
   </div>)}
   <Link href="/#how">How it works</Link>
  </nav>
  <div className="header-actions"><button className="cart-button"><ShoppingBag size={19}/><span>0</span></button><button className="menu-button" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button></div>
 </header></>;
}
