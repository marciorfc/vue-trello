export default {
    props: {
        column: {
            type: Object,
            required: true
        },
        columnIndex: {
            type: Number,
            required: true
        },
        board: {
            type: Object,
            required: true
        }
    },
    methods: {
        moveTaskOrColumn(transferData) {
            console.log('moveTaskOrColumn')
            if (transferData.type === 'task') {
                this.moveTask(transferData)
            } else {
                this.moveColumn(transferData)
            }
        },
        moveTask({ fromColumnIndex, fromTaskIndex }) {
            console.log('moveTask')
            const fromTasks = this.board.columns[fromColumnIndex].tasks;
            
            this.$store.commit('MOVE_TASK', {
                fromTasks,
                toTasks: this.column.tasks,
                fromTaskIndex,
                toTaskIndex: this.taskIndex
            })
          },
        moveColumn({ fromColumnIndex }) {
                       
            this.$store.commit('MOVE_COLUMN', {
                fromColumnIndex,
                toColumnIndex: this.columnIndex
            })
        }
    }
}