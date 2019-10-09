const app = new Vue({
    el: '#app',
    data: {
        title: 'Salvando el semestre',
        evaluaciones: [],
        newEva: { nombre: '', porcentaje: 0, nota: 0 },
        suma: 0,
        porctotal: 0,
        evaselect: {},
        notafaltante: 0
    },
    methods: {
        agregarEva() {
            this.evaluaciones.push(this.newEva);
            this.newEva = {};
        },
        limpiarEvaluaciones() {
            this.evaluaciones = [];
        },
        borrarEva(index) {
            this.evaluaciones.splice(index, 1);
        },
        verCuantoFalta() {
            alert('Necesitas ' + this.notafaltante + ' para aprobar');
        }
    },
    computed: {
        sumarNotas() {
            this.suma = 0;
            for (eva of this.evaluaciones) {
                this.suma = this.suma + eva.nota * eva.porcentaje / 100;
            }
            return this.suma;
        },
        sumarPorcentajes() {
            this.porctotal = 0;
            for (eva of this.evaluaciones) {
                this.porctotal = this.porctotal + eva.porcentaje;
            }
            return this.porctotal;
        },
        cuantofalta() {
            this.notafaltante = (12.5 - this.suma) / (this.evaselect / 100);
            return this.notafaltante;
        }



    },
});