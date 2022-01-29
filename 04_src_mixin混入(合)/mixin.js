export const m = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log('你好啊!!');
    },
}
export const m2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}