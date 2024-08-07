// material ui
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

type FilterProps = {
  handleChangeType: (type: string) => void;
  handleChangeKey: (type: string) => void;
  triggerRefetch: () => void;
};

const informationTypes = [
  {
    value: "domain",
    label: "Domain Information",
  },
  {
    value: "contact",
    label: "Contact Information",
  },
];

const Filter = ({
  handleChangeType,
  handleChangeKey,
  triggerRefetch,
}: FilterProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      triggerRefetch();
    }
  };
  return (
    <div className="flex">
      <FormControl
        sx={{ width: "30ch", marginRight: "auto" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">
          Domain Name
        </InputLabel>
        <FilledInput
          id="outlined-adornment-password"
          type="text"
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle for search"
                edge="end"
                onClick={triggerRefetch}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          size="small"
          onChange={(e) => handleChangeKey(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </FormControl>
      <TextField
        id="filled-select-currency"
        select
        label="Select"
        defaultValue="domain"
        variant="filled"
        size="small"
      >
        {informationTypes.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => handleChangeType(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Filter;
