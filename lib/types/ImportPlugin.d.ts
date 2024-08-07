/// <reference types="react" />
import { RuntimeDataSourceConfig as DataSourceConfig } from '@alilc/lowcode-datasource-types';
import { DataSourceType } from './DataSourceType';
export interface DataSourcePaneImportPlugin {
    name: string;
    title: string;
    component: React.ReactNode;
    componentProps?: DataSourcePaneImportPluginCustomProps;
}
export interface DataSourcePaneImportPluginCustomProps extends DataSourcePaneImportPluginComponentProps {
    [customPropName: string]: any;
}
export interface DataSourcePaneImportPluginComponentProps {
    dataSourceTypes: DataSourceType[];
    onImport?: (dataSourceList: DataSourceConfig[]) => void;
    onCancel?: () => void;
}
export { DataSourceConfig };
