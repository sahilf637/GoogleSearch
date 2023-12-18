const Languages:React.FC = () => {                                                                                             //Generates Language using map function       
    const language = ["हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"];
    const landiv = language.map((values) => {
        return <li><a className="Langlink" key={values} href="">{values}</a></li>
    })
    return <ul>{landiv}</ul>
}

export default Languages