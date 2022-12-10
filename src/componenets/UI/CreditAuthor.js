export default function CreditAuthor(props) {
    const { projectUrl, projectName, projectLicense, projectAuthor } = props;

    return (
        <div className="gwssc__credit-author">
            <p className="gwssc__credit-author-project-name">
                <a href={projectUrl} className="gwssc__credit-author-url" target="_blank" rel="noopener noreferrer">
                    {projectName}
                </a>
            </p>
            <ul className="gwssc__credit-author-meta">
                <li>
                    license - <span className="gwssc__credit-author-license">{projectLicense}</span>
                </li>
                <li>
                    Copyright - <span className="gwssc__credit-author-name">{projectAuthor}</span>
                </li>
            </ul>
        </div>
    );
}