module.exports = function (user) {
    return {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        registeredAt: user.created_at,
        updatedAt: user.updated_at
    }
}