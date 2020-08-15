<template>
    <div class="components-container">
        <el-tabs type = "border-card">
            <el-tab-pane>
                <span slot="label">我的提问</span>
                <el-alert title="Oops,你还没有提问" type="info"></el-alert>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label">我的回答</span>
                <el-alert title="Oops,你还没有回答" type="info"></el-alert>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>