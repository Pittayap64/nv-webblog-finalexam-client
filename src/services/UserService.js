import Speaker from '@/services/Speaker'
export default {
    index(search) {
        return Speaker().get('userss')
    },
    show(userId) {
        return Speaker().get('user/' + userId)
    },
    put(user) {
        return Speaker().put('user', user)
    },
    post(user) {
        return Speaker().post('user/' + user.id, user)
    },
    delete(user) {
        return Speaker().delete('user/' + user.id, user)
    },
}