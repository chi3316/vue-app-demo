<template>
    <div>
        <el-container>
            <el-aside width="auto">
                <common-asid />
            </el-aside>
            <el-container>
                <el-header>
                    <Commom-header />
                </el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style>
.el-header {
    padding: 0;
}
</style>
<script>
import CommonAsid from '@/components/CommonAsid.vue';
import CommomHeader from '../components/CommomHeader.vue';
export default {
    data() {
        return {}
    },
    components: {
        CommonAsid,
        CommomHeader
    }
}
</script>