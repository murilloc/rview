const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Simulação de banco de dados (substituir com Sequelize)
const users = []; // [{ username: 'admin', password: 'hashedPassword' }]

const secretKey = "sua_chave_secreta"; // Substitua por uma variável de ambiente

// Registro de novo usuário
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });

        return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

// Login de usuário
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });

        // Verifica se o usuário existe
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Gera um token JWT
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao fazer login' });
    }
};

// Middleware para verificar o token
exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido ou expirado" });
    }
};
