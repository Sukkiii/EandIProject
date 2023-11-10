const asyncHandler = require('express-async-handler')
const { User } = require('../models/model');
const hashPassword = require('../utils/hash-password');
const jwt = require('jsonwebtoken');
const secret = process.env.ACCESS_SECRET;

// 회원 가입
const signup = asyncHandler(async (req, res) => {
    const { email, userName, password, birthDay, address, userRole } = req.body;
    const userJoin = await User.findOne({ email });
    if (userJoin) {
        res.status(400)
        throw new Error('이미 가입하신 회원입니다.')
    }
    const hashedPassword = hashPassword(password); // 비밀번호 해쉬값 만들기
    const user = await User.create({ // 유저 생성
        email,
        userName,
        birthDay,
        address,
        password: hashedPassword,
        userRole,
    })
    if (!user) {
        res.status(404);
        throw new Error('사용자가 존재하지 않습니다.');
    }
    res.json({ massage: `${user.userName}님 회원 가입에 성공하셨습니다!` })
})

// 로그인
const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user === null) {
        const error = { status: 401, message: '이메일 또는 비밀번호 불일치입니다.' };
        next(error);
        return;
    }

    if (user && user.password !== hashPassword(password)) {
        res.status(401)
        const error = new Error('이메일 또는 비밀번호 불일치입니다.');
        next(error);
        return;
    }  // 토큰 생성
    const token = jwt.sign({ // objId, 역할, 권한
        id: user._id,
        userRole: user.userRole,
        permission: user.permission
    },
        secret,
        { expiresIn: "1h" });
    // res.json({
    //    error: null,
    //    data: token,
    // })

    res.cookie('accessToken', token, { maxAge: 3600000 })
    res.json({ massage: `${user.userName}님 환영합니다!` })
    return;
})
// 로그아웃
const logout = asyncHandler(async (req, res) => {
    res.cookie('accessToken', null, { maxAge: 0 })
    if (res.cookie.accessToken) {
        res.status(500)
        const error = new Error('정상적으로 로그 아웃이 되지 않았습니다.');
        next(error);
        return;
    } res.json({ message: '이용해주셔서 감사합니다.' })
})

// 회원 목록 조회 (관리자)
const getUserList = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const users = await User.find({}).limit(20); // db 특정 필터를 설정하여 갯수를 제한하여 데이터 반환할 수 있게 로직구현 고민
=======
    const users = await User.find({}).limit(20); 
>>>>>>> onlyBack
    if(users.length === 0) {
        res.status(404)
        throw new Error('요청하신 데이터가 존재하지 않습니다.')
    }
<<<<<<< HEAD
    res.json(users); // 민감정보 제어
=======
    res.json(users);
>>>>>>> onlyBack
});

// 회원 조회
const getUser = asyncHandler(async (req, res) => {
<<<<<<< HEAD
    const user = await User.findById(req.params.id);
=======
    const user = await User.findById(req.user.id);
>>>>>>> onlyBack
    if (!user) {
        res.status(404);
        throw new Error('사용자가 존재하지 않습니다.');
    }
    res.json(user);
})
// 회원 수정
const updateUser = asyncHandler(async (req, res) => {
    const { password, ...rest } = req.body;
    const userId = req.params.id;
    const user = await User.findById(userId)
    if (!user) {
        return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }
    if (password) {
        const hashedPassword = hashPassword(password)
        rest.password = hashedPassword
    }
    const updatedUser = await User.updateOne(
        { _id: userId },
        { rest },
    );
    if (updatedUser.modifiedCount === 0) {
        res.status(500)
        throw new Error('서버 오류입니다.');
    }

    res.json({ message: '회원 정보가 수정되었습니다.' });
});
<<<<<<< HEAD

=======
// 회원 탈퇴
const resignUser = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const user = await User.findById(userId)
    if (!user) {
        return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }
    user.deleteAt = Date.now();
    await user.save();

    res.json({ message: '사용자 데이터가 삭제되었습니다. ' });
});
>>>>>>> onlyBack
// 회원 삭제(탈퇴) - 소프트 삭제
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    const user = await User.findById(userId)
    if (!user) {
        res.status(404)
        throw new Error('사용자를 찾을 수 없습니다.');
    }
    if (user.deleteAt !== null) {
        res.status(400)
        throw new Error('이미 삭제된 데이터입니다.')
    }
    user.deleteAt = Date.now();
    await user.save();

    res.json({ message: '사용자 데이터가 삭제되었습니다. ' });
});

<<<<<<< HEAD
module.exports = { signup, login, logout, getUserList, updateUser, deleteUser, getUser };
=======
module.exports = { signup, login, logout, getUserList, updateUser, deleteUser, getUser, resignUser };
>>>>>>> onlyBack

