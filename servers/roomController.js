export default function allRooms(req, res) {
    res.status(200).json(
        {
             message: 'Success',
             data:'All rooms Data' 
            });
  };