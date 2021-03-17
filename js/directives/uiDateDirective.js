angular.module('listaTelefonica').directive('uiDate', function($filter) {

    return {
        /* Usado para interação com o DOM. O scope do link é o mesmo do controller se não houver scope isolado*/
        /* O parâmetro element serve para interagir com o elemento*/
        /* O parâmetro attrs é referente aos atributos da diretiva. Importante caso o scope não esteja isolado. 
        Caso o scope seja isolado, podemos referenciá-los pelo 'scope'.*/
        /* O Parâmetro 'ctrl' é passado quando declaramos, no require que desejamos acesso ao ngModel */
        link: function(scope, element, attrs, ctrl) {
            
            element.bind('keyup', function() {
                //console.log(ctrl.$viewValue);
                var _formatDate = function(date) {
                    date = date.replace(/\D+/g, '');
                    if (date.length > 2) {
                        date = date.substring(0,2) + '/' + date.substring(2);
                    }
                    if (date.length > 5) {
                        date = date.substring(0,5) + '/' + date.substring(5,9);
                    }
                    return date;
                };
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            // Converte o valor informado no elemento e o seta no model
            ctrl.$parsers.push(function(value) {
                if (value.length === 10) {
                    var parts = value.split(/\D+/g);
                    var dia = parseInt(parts[0]);
                    var mes = parseInt(parts[1]) - 1;
                    var ano = parseInt(parts[2]);
                    var result = new Date(ano, mes, dia);
                    if ($filter('date')(result, 'dd/MM/yyyy') !== value) {
                        return null;
                    }
                    return result;
                }
            });

            // Converte o valor do model e o seta no elemento
            ctrl.$formatters.push(function(value) {
                if (value) {
                    //var dia = _incluiZerosAEsquerda(date.getDate(), 2);
                    //var mes = _incluiZerosAEsquerda(date.getMonth() + 1, 2);
                    //var ano = _incluiZerosAEsquerda(date.getFullYear(), 4);
                    //return dia + '/' + mes + '/' + ano;

                    // $filter é o pipe filter, usado na view
                    return $filter('date')(value, 'dd/MM/yyyy');
                }
            });
            /*
            var _incluiZerosAEsquerda = function(num, size) {
                var result = '' + num;
                while (result.length < size) {
                    result = '0' + result;
                }
                return result;
            }
            */
        },
        /* Quando explicitamos que queremos acessar a api do ngModel, através do 'require', recebemos uma referência no link,
        pelo parâmetro 'ctrl' */
        require: 'ngModel',
    };

});