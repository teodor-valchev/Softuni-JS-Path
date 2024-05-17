exports.difficultyLevelViewData = (difficultyLevel) => {

    const titles = [
        "Very Easy",
        "Easy",
        "Medium (Standard 3x3)",
        "Intermediate",
        "Expert",
        "Hardcore",
    ];

    const data = titles.map((title, index) => ({
        title: `${index + 1} - ${title}`,
        value: index + 1,
        selected: difficultyLevel === index + 1,
    }));

    return data;
}