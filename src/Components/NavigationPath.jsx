function NavigationPath({ subject }) {
    const paths = [
        "Видео сабақ",
        subject,
        "Тақырыптық тест",
        "Қатемен жұмыс",
    ];

    return (
        <div className="navigation-path">
            {paths.map((path, index) => (
                <span
                    key={index}
                    className={index === paths.length - 1 ? "current-step" : "previous-step"}
                >
          {path}
                    {index !== paths.length - 1 && " / "}
        </span>
            ))}
        </div>
    );
}

export default NavigationPath;
