import { Toast } from 'primereact/toast';
import { SpeedDialAction,SpeedDialIcon } from "@mui/material";
// import SpeedDial from '@mui/material/SpeedDial';
import SpeedDial from '@mui/material/SpeedDial';
 const speedDialDemo = () => {

    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                Toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                Toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                Toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        }
    ];
    return (
        <><SpeedDial model={items} /></>
    );
}
export default speedDialDemo;