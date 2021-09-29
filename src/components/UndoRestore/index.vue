<template>
    <div style="width:1000px;margin:0 auto">
        <Button type="info" @click="handleOk">添加</Button>
        <Table :columns="columns" :data="datas"></Table>
        <Button type="info" @click="handleOkOne">添加</Button>
        <Table :columns="columnsOne" :data="datasOne"></Table>
        <Button type="info" @click="handleOkTwo">添加</Button>
        <Table :columns="columnsTwo" :data="datasTwo"></Table>
        <Button @click="handleRevoke">撤销</Button>
        <Button type="primary" @click="handleRecovery">恢复</Button>
    </div>
</template>

<script>
function ArrayStack () {
    let arr = []
    // 压入栈中
    this.push = function (element) {
        arr.push(element)
    }
    // 弹出栈顶元素
    this.pop = function () {
        return arr.pop()
    }
    // 查看栈顶元素
    this.top = function () {
        return arr[arr.length - 1]
    }
    // 获取栈长
    this.size = function () {
        return arr.length
    }
    // 清空栈
    this.clear = function () {
        arr = []
        return true
    }

    this.toString = function () {
        return arr.toString()
    }
}

export default {
    name: 'index',
    data () {
        return {
            columns: [
                {type: 'index', width: 60, align: 'center'},
                {title: 'Name', key: 'name'},
                {title: 'Age', key: 'age'},
                {title: 'Address', key: 'address'}
            ],
            datas: [],
            columnsOne: [
                {type: 'index', width: 60, align: 'center'},
                {title: 'Name', key: 'name'},
                {title: 'Age', key: 'age'},
                {title: 'Address', key: 'address'}
            ],
            datasOne: [],
            columnsTwo: [
                {type: 'index', width: 60, align: 'center'},
                {title: 'Name', key: 'name'},
                {title: 'Age', key: 'age'},
                {title: 'Address', key: 'address'}
            ],
            datasTwo: [],
            stackRevoke: new ArrayStack(), //撤销栈
            stackRecovery: new ArrayStack() //恢复栈
        }
    },
    created () {
    },
    mounted () {
    },
    methods: {
        // 添加时向恢复栈中加数据
        handleOk () {
            let obj = {id: 'text001', name: '北京市', age: 18, address: '北京', code: '1001'}
            this.datas.push(obj)
            this.stackRecovery.push(obj)
        },
        handleOkOne () {
            let obj = {id: 'text005', name: '石家庄市', age: 18, address: '河北省', code: '1002'}
            this.datasOne.push(obj)
            this.stackRecovery.push(obj)
        },
        handleOkTwo () {
            let obj = {id: 'text009', name: '杭州市', age: 18, address: '浙江省', code: '1003'}
            this.datasTwo.push(obj)
            this.stackRecovery.push(obj)
        },
        // 撤销(删除)
        handleRevoke () {
            let p = this.stackRecovery.pop() //读取恢复栈顶数据

            if (p !== undefined) {
                switch (p.code) {
                    case '1001': {
                        if (this.datas.length > 0) {
                            let p = this.datas.pop()
                            this.stackRevoke.push(p) //向删除栈中增加数据
                        }
                    }
                        break
                    case '1002': {
                        if (this.datasOne.length > 0) {
                            let p = this.datasOne.pop()
                            this.stackRevoke.push(p)
                        }
                    }
                        break
                    case '1003': {
                        if (this.datasTwo.length > 0) {
                            let p = this.datasTwo.pop()
                            this.stackRevoke.push(p)
                        }
                    }
                        break
                }
            }
        },
        // 恢复(复原)
        handleRecovery () {
            let p = this.stackRevoke.pop() //读取撤销栈中得第一条数据

            if (p !== undefined) { //判断取出对象是否存在
                switch (p.code) { //判断是哪一个数组下得数据
                    case '1001':
                        this.stackRecovery.push(p) //向恢复栈中添加数据
                        this.datas.push(p) //向指定数组添加数据
                        break

                    case '1002':
                        this.stackRecovery.push(p)
                        this.datasOne.push(p)
                        break

                    case '1003':
                        this.stackRecovery.push(p)
                        this.datasTwo.push(p)
                        break
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
