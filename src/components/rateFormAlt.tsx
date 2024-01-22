import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function RateFormAlt() {
  return (
    <form
      id="exchange"
      className="bg-white p-7 rounded-lg shadow overflow-hidden border-l-4 border-yellow-500"
    >
      <div className="font-bold text-lg mb-3">Get Live Rates</div>
      <FormControl fullWidth className="mb-5">
        <InputLabel>Shop</InputLabel>
        <Select inputProps={{ MenuProps: { disableScrollLock: true } }}>
          <MenuItem value={1}>Central Park Mall</MenuItem>
          <MenuItem value={2}>PIK</MenuItem>
        </Select>
      </FormControl>

      <div className="grid grid-cols-2 gap-3">
        <FormControl fullWidth className="mb-5">
          <InputLabel>Currency Send</InputLabel>
          <Select inputProps={{ MenuProps: { disableScrollLock: true } }}>
            <MenuItem value={1}>Australian Dollar</MenuItem>
            <MenuItem value={2}>British Pound</MenuItem>
            <MenuItem value={3}>Chinese Yuan</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth className="mb-5">
          <InputLabel>Currency From</InputLabel>
          <Select inputProps={{ MenuProps: { disableScrollLock: true } }}>
            <MenuItem value={1}>Australian Dollar</MenuItem>
            <MenuItem value={2}>British Pound</MenuItem>
            <MenuItem value={3}>Chinese Yuan</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TextField
        fullWidth
        label="Amount"
        type="number"
        variant="outlined"
        className="mb-5"
      />

      <Button
        className="p-3 bg-blue-800"
        fullWidth
        disableElevation
        type="button"
        variant="contained"
        color="primary"
      >
        Get Exchange Now
      </Button>
    </form>
  );
}
