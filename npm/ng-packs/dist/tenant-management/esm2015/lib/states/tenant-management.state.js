/**
 * @fileoverview added by tsickle
 * Generated from: lib/states/tenant-management.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Action, Selector, State } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { CreateTenant, DeleteTenant, GetTenants, GetTenantById, UpdateTenant, } from '../actions/tenant-management.actions';
import { TenantManagementService } from '../services/tenant-management.service';
let TenantManagementState = class TenantManagementState {
    /**
     * @param {?} tenantManagementService
     */
    constructor(tenantManagementService) {
        this.tenantManagementService = tenantManagementService;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static get({ result }) {
        return result.items || [];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    static getTenantsTotalCount({ result }) {
        return result.totalCount;
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    get({ patchState }, { payload }) {
        return this.tenantManagementService.getTenant(payload).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        result => patchState({
            result,
        }))));
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    getById({ patchState }, { payload }) {
        return this.tenantManagementService.getTenantById(payload).pipe(tap((/**
         * @param {?} selectedItem
         * @return {?}
         */
        selectedItem => patchState({
            selectedItem,
        }))));
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    delete(_, { payload }) {
        return this.tenantManagementService.deleteTenant(payload);
    }
    /**
     * @param {?} _
     * @param {?} __1
     * @return {?}
     */
    add(_, { payload }) {
        return this.tenantManagementService.createTenant(payload);
    }
    /**
     * @param {?} __0
     * @param {?} __1
     * @return {?}
     */
    update({ getState }, { payload }) {
        return this.tenantManagementService.updateTenant(Object.assign({}, getState().selectedItem, payload));
    }
};
TenantManagementState.ctorParameters = () => [
    { type: TenantManagementService }
];
tslib_1.__decorate([
    Action(GetTenants),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetTenants]),
    tslib_1.__metadata("design:returntype", void 0)
], TenantManagementState.prototype, "get", null);
tslib_1.__decorate([
    Action(GetTenantById),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, GetTenantById]),
    tslib_1.__metadata("design:returntype", void 0)
], TenantManagementState.prototype, "getById", null);
tslib_1.__decorate([
    Action(DeleteTenant),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, DeleteTenant]),
    tslib_1.__metadata("design:returntype", void 0)
], TenantManagementState.prototype, "delete", null);
tslib_1.__decorate([
    Action(CreateTenant),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, CreateTenant]),
    tslib_1.__metadata("design:returntype", void 0)
], TenantManagementState.prototype, "add", null);
tslib_1.__decorate([
    Action(UpdateTenant),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, UpdateTenant]),
    tslib_1.__metadata("design:returntype", void 0)
], TenantManagementState.prototype, "update", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Array)
], TenantManagementState, "get", null);
tslib_1.__decorate([
    Selector(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Number)
], TenantManagementState, "getTenantsTotalCount", null);
TenantManagementState = tslib_1.__decorate([
    State({
        name: 'TenantManagementState',
        defaults: (/** @type {?} */ ({ result: {}, selectedItem: {} })),
    }),
    tslib_1.__metadata("design:paramtypes", [TenantManagementService])
], TenantManagementState);
export { TenantManagementState };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantManagementState.prototype.tenantManagementService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50LW1hbmFnZW1lbnQuc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWJwL25nLnRlbmFudC1tYW5hZ2VtZW50LyIsInNvdXJjZXMiOlsibGliL3N0YXRlcy90ZW5hbnQtbWFuYWdlbWVudC5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQWdCLE1BQU0sYUFBYSxDQUFDO0FBQ3BFLE9BQU8sRUFBYSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQ0wsWUFBWSxFQUNaLFlBQVksRUFDWixVQUFVLEVBQ1YsYUFBYSxFQUNiLFlBQVksR0FDYixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0lBT25FLHFCQUFxQixTQUFyQixxQkFBcUI7Ozs7SUFXaEMsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFBRyxDQUFDOzs7OztJQVR4RSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUEwQjtRQUMzQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsTUFBTSxFQUEwQjtRQUM1RCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBS0QsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUF3QyxFQUFFLEVBQUUsT0FBTyxFQUFjO1FBQy9FLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pELEdBQUc7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRSxDQUNYLFVBQVUsQ0FBQztZQUNULE1BQU07U0FDUCxDQUFDLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLEVBQUUsVUFBVSxFQUF3QyxFQUFFLEVBQUUsT0FBTyxFQUFpQjtRQUN0RixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM3RCxHQUFHOzs7O1FBQUMsWUFBWSxDQUFDLEVBQUUsQ0FDakIsVUFBVSxDQUFDO1lBQ1QsWUFBWTtTQUNiLENBQUMsRUFDSCxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBR0QsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxFQUFFLFFBQVEsRUFBd0MsRUFBRSxFQUFFLE9BQU8sRUFBZ0I7UUFDbEYsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxtQkFBTSxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUssT0FBTyxFQUFHLENBQUM7SUFDL0YsQ0FBQztDQUNGLENBQUE7O1lBdEM4Qyx1QkFBdUI7O0FBR3BFO0lBREMsTUFBTSxDQUFDLFVBQVUsQ0FBQzs7cURBQ29ELFVBQVU7O2dEQVFoRjtBQUdEO0lBREMsTUFBTSxDQUFDLGFBQWEsQ0FBQzs7cURBQ3FELGFBQWE7O29EQVF2RjtBQUdEO0lBREMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7cURBQ0UsWUFBWTs7bURBRWxDO0FBR0Q7SUFEQyxNQUFNLENBQUMsWUFBWSxDQUFDOztxREFDRCxZQUFZOztnREFFL0I7QUFHRDtJQURDLE1BQU0sQ0FBQyxZQUFZLENBQUM7O3FEQUNtRCxZQUFZOzttREFFbkY7QUE5Q0Q7SUFEQyxRQUFRLEVBQUU7Ozs7c0NBR1Y7QUFHRDtJQURDLFFBQVEsRUFBRTs7Ozt1REFHVjtBQVRVLHFCQUFxQjtJQUpqQyxLQUFLLENBQXlCO1FBQzdCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsUUFBUSxFQUFFLG1CQUFBLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQTBCO0tBQ3JFLENBQUM7NkNBWTZDLHVCQUF1QjtHQVh6RCxxQkFBcUIsQ0FpRGpDO1NBakRZLHFCQUFxQjs7Ozs7O0lBV3BCLHdEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiwgU2VsZWN0b3IsIFN0YXRlLCBTdGF0ZUNvbnRleHQgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge1xyXG4gIENyZWF0ZVRlbmFudCxcclxuICBEZWxldGVUZW5hbnQsXHJcbiAgR2V0VGVuYW50cyxcclxuICBHZXRUZW5hbnRCeUlkLFxyXG4gIFVwZGF0ZVRlbmFudCxcclxufSBmcm9tICcuLi9hY3Rpb25zL3RlbmFudC1tYW5hZ2VtZW50LmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUZW5hbnRNYW5hZ2VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RlbmFudC1tYW5hZ2VtZW50JztcclxuaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90ZW5hbnQtbWFuYWdlbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUJQIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuXHJcbkBTdGF0ZTxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPih7XHJcbiAgbmFtZTogJ1RlbmFudE1hbmFnZW1lbnRTdGF0ZScsXHJcbiAgZGVmYXVsdHM6IHsgcmVzdWx0OiB7fSwgc2VsZWN0ZWRJdGVtOiB7fSB9IGFzIFRlbmFudE1hbmFnZW1lbnQuU3RhdGUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZW5hbnRNYW5hZ2VtZW50U3RhdGUge1xyXG4gIEBTZWxlY3RvcigpXHJcbiAgc3RhdGljIGdldCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogQUJQLkJhc2ljSXRlbVtdIHtcclxuICAgIHJldHVybiByZXN1bHQuaXRlbXMgfHwgW107XHJcbiAgfVxyXG5cclxuICBAU2VsZWN0b3IoKVxyXG4gIHN0YXRpYyBnZXRUZW5hbnRzVG90YWxDb3VudCh7IHJlc3VsdCB9OiBUZW5hbnRNYW5hZ2VtZW50LlN0YXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiByZXN1bHQudG90YWxDb3VudDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVuYW50TWFuYWdlbWVudFNlcnZpY2U6IFRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlKSB7fVxyXG5cclxuICBAQWN0aW9uKEdldFRlbmFudHMpXHJcbiAgZ2V0KHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRzKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnQocGF5bG9hZCkucGlwZShcclxuICAgICAgdGFwKHJlc3VsdCA9PlxyXG4gICAgICAgIHBhdGNoU3RhdGUoe1xyXG4gICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oR2V0VGVuYW50QnlJZClcclxuICBnZXRCeUlkKHsgcGF0Y2hTdGF0ZSB9OiBTdGF0ZUNvbnRleHQ8VGVuYW50TWFuYWdlbWVudC5TdGF0ZT4sIHsgcGF5bG9hZCB9OiBHZXRUZW5hbnRCeUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZW5hbnRNYW5hZ2VtZW50U2VydmljZS5nZXRUZW5hbnRCeUlkKHBheWxvYWQpLnBpcGUoXHJcbiAgICAgIHRhcChzZWxlY3RlZEl0ZW0gPT5cclxuICAgICAgICBwYXRjaFN0YXRlKHtcclxuICAgICAgICAgIHNlbGVjdGVkSXRlbSxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBAQWN0aW9uKERlbGV0ZVRlbmFudClcclxuICBkZWxldGUoXywgeyBwYXlsb2FkIH06IERlbGV0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UuZGVsZXRlVGVuYW50KHBheWxvYWQpO1xyXG4gIH1cclxuXHJcbiAgQEFjdGlvbihDcmVhdGVUZW5hbnQpXHJcbiAgYWRkKF8sIHsgcGF5bG9hZCB9OiBDcmVhdGVUZW5hbnQpIHtcclxuICAgIHJldHVybiB0aGlzLnRlbmFudE1hbmFnZW1lbnRTZXJ2aWNlLmNyZWF0ZVRlbmFudChwYXlsb2FkKTtcclxuICB9XHJcblxyXG4gIEBBY3Rpb24oVXBkYXRlVGVuYW50KVxyXG4gIHVwZGF0ZSh7IGdldFN0YXRlIH06IFN0YXRlQ29udGV4dDxUZW5hbnRNYW5hZ2VtZW50LlN0YXRlPiwgeyBwYXlsb2FkIH06IFVwZGF0ZVRlbmFudCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVuYW50TWFuYWdlbWVudFNlcnZpY2UudXBkYXRlVGVuYW50KHsgLi4uZ2V0U3RhdGUoKS5zZWxlY3RlZEl0ZW0sIC4uLnBheWxvYWQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==