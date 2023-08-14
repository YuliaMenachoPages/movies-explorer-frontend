import './SectionWrapper.css'

function SectionWrapper({kind, idNav, title, children}) {
    return (
        <section id={idNav} className={`section_type_${kind} section`}>
            <div className="section__titleContainer">
                <h2 className="section__title">{title}</h2>
            </div>
            {children}
        </section>
    )
}

export default SectionWrapper;
