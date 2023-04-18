angular.module('srmt').directive(
		'capitalizeFirst',
		function(uppercaseFilter, $parse) {
			return {
				require : 'ngModel',
				link : function(scope, element, attrs, modelCtrl) {
					var capitalize = function(inputValue) {
						if (inputValue == undefined)
							inputValue = '';
						var capitalized = inputValue.charAt(0).toUpperCase()
								+ inputValue.substring(1);
						if (capitalized !== inputValue) {
							modelCtrl.$setViewValue(capitalized);
							modelCtrl.$render();
						}
						return capitalized;
					}
					var model = $parse(attrs.ngModel);
					modelCtrl.$parsers.push(capitalize);
					capitalize(model(scope));
				}
			};
		});
/**
 * <input type="text" ng-model="name" capitalize-first>
 */
