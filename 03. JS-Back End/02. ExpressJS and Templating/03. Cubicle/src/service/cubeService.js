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

exports.getAll = () => cubes.slice();

exports.createCube = (cubeData) => {
    cubes.push({ id: cubes.length + 1, ...cubeData });
};
