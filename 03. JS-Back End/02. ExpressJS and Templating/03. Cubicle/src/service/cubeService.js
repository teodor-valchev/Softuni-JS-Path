const cubes = [
    {
        id: 1,
        name: "Miricle",
        description: "Miricle Cube",
        imageUrl:
            "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
        difficultyLevel: 2,
    },
    {
        id: 2,
        name: "PYRMAIX",
        description: "PYRMAIX Cube",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg",
        difficultyLevel: 4,
    },
];

exports.getAll = (search, from, to) => {
    let newCubes = cubes.slice()
    if (search) {
        newCubes = cubes.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        newCubes = newCubes.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if (to) {
        newCubes = newCubes.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return newCubes;
};

exports.getCube = (cubeId) => cubes.find(x => x.id == cubeId) 

exports.createCube = (cubeData) => {
    cubes.push({ id: cubes.length + 1, ...cubeData });
};
