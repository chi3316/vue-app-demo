<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <common-asid />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import CommonAsid from '@/components/CommonAsid.vue';
export default {
    data() {
        return {}
    },
    components: {
        CommonAsid
    }
}
</script>