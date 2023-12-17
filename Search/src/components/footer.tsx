const Footer = () => {
    return <div className="footer">
        <div className="Indi">India</div>
        <div className="Fc ">
            <div>
                <ul>
                    <li><a className="footerLink" key= "About" href="">About</a></li>
                    <li><a className="footerLink" key= "Advertising" href="">Advertising</a></li>
                    <li><a className="footerLink" key= "Bussiness" href="">Business</a></li>
                    <li><a className="footerLink" key= "How" href="">How Search works</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a className="footerLink" key= "Privacy" href="">Privacy</a></li>
                    <li><a className="footerLink" key= "Terms" href="">Terms</a></li>
                    <li><a className="footerLink" key= "Setting" href="">Setting</a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Footer