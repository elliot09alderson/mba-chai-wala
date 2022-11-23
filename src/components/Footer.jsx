import React from 'react'

const Footer = () => {
    const linksBackToNormal=()=>{
        const AllFooterLinks = document.querySelectorAll('.footerlinks')
        AllFooterLinks.forEach((item,index)=>item.style.opacity=1);
      }
    const footerLinks = (element)=>{
     
        const AllFooterLinks = document.querySelectorAll('.footerlinks')
        console.log(AllFooterLinks);
        switch (element) {
            case 0:
                AllFooterLinks.forEach((item,index)=>index === 0 ? (item.style.opacity = 1): (item.style.opacity=0.3))
                break;

                case 1:
                    AllFooterLinks.forEach((item,index)=>index === 1 ? item.style.opacity = 1: item.style.opacity=0.2);
                    
                    break;

                    case 2:
                        AllFooterLinks.forEach((item,index)=>index === 2 ? item.style.opacity = 1: item.style.opacity=0.2);
                        
                        break;

                        case 3:
                            AllFooterLinks.forEach((item,index)=>index === 3 ? item.style.opacity = 1: item.style.opacity=0.2);
                            
                            break;

                            case 4:
                                AllFooterLinks.forEach((item,index)=>index === 4 ? item.style.opacity = 1: item.style.opacity=0.2);
                                
                                break;

                                case 5:
                                    AllFooterLinks.forEach((item,index)=>index === 5 ? item.style.opacity = 1: item.style.opacity=0.3);
                                    
                                    break;
                
                default:
                    AllFooterLinks.forEach((item) =>(item.style.opacity = 1));
                    break;
        }
    }
  return (
 <>
 <footer>
    <h1>
        Let's <br/>
        #ConnectOnCutting?
    </h1>
    <aside onMouseLeave={linksBackToNormal}>
        <a href="" className="footerlinks"  onMouseOver={()=>footerLinks(0)}>Home</a>
        <a href="" className="footerlinks" onMouseOver={()=>footerLinks(1)}>Story</a>
        <a href="" className="footerlinks" onMouseOver={()=>footerLinks(2)}>Media</a>
        <a href="" className="footerlinks" onMouseOver={()=>footerLinks(3)}>Franchise</a>
        <a href="" className="footerlinks" onMouseOver={()=>footerLinks(4)}>events</a>
        <a href="" className="footerlinks" onMouseOver={()=>footerLinks(5)}>Chai Wala Cares</a>
    </aside>

    <div>
        <h5>
            Email
        </h5>
        <a href="mailto: pratikverma9691@gmail.com">pratikverma9691@gmail.com</a>
        <a href="mailto: Fenchise@chaiwala.com">Frenchise@chaiwala.com</a>
    </div>
    <div>
        <h5>
            Phone
        </h5>
        <a href="tel:+91 8770800807">8770800807</a>
    </div>

    <p>℗ COPYRIGHT 2024 MBA CHAIWALA made by </p>
 </footer>
 <div className="footer">
    
 </div>
 </>
  )
}

export default Footer