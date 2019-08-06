import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations('breadcrumbs', {
            setBreadcrumbs: 'set',
            pushBreadcrumbs: 'push',
            popBreadcrumbs: 'pop',
            replaceBreadcrumbs: 'replace',
            emptyBreadcrumbs: 'empty'
        })
    }
}