<template>
    <div>
        <el-button @click="request">
            p-limit 实现并发控制
        </el-button>
    </div>
</template>

<script setup lang='ts'>
import pLimit from 'p-limit';
const limit = pLimit(2);

const request = async () => {
    const input = [
        limit(() => fetchSomething('foo', 5000)),
        limit(() => fetchSomething('bar', 9000)),
        limit(() => fetchSomething('key', 1000))
    ];

    const fetchSomething = async (id: string, ms: number) => {
        console.log(id, "@@@@@@@@")
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(id)
                console.log("!!!!!!!", id)
            }, ms);
        });
    };
    const result = await Promise.all(input);
    console.log(result);
}


</script>
<style scoped lang='less'></style>