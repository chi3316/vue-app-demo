<template>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
        <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" v-bind:index="item.name">
            <i :class="`el-icon-${item.icon}`"></i> <!--用``，不是单引号，在写sql的时候也会用``把关键字括起来-->
            <!-- <i :class="'el-icon-' + item.icon"></i> -->
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                <!-- <span slot="title">分组一</span> -->
                <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
                <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
            </el-menu-item-group>
            <!-- <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
        </el-submenu>
        <!-- 
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item> -->
    </el-menu>
</template>

<style lang = "less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    height: 100%;
    border-right: none;

    h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-style: 16px;
        font-weight: 400;
    }
}
</style>
<script>
export default {
    data() {
        return {
            // isCollapse: false,
            meunData: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其它',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        },
                    ]
                }
            ]
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {

            //当页面的路由与跳转的路由不一致的时候才允许跳转
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                console.log(item);
                this.$router.push(item.path);
            }
        }
    },
    computed: {
        //没有子菜单
        noChildren() {
            return this.meunData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren() {
            return this.meunData.filter(item => item.children)
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    }
}
</script>