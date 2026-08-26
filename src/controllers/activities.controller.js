import {
  createActivityService,
  updateActivityService,
  deleteActivityService,
} from "../services/activities.service.js";

// 5.1 POST /activities
export const createActivity = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?.userId;
    const newActivity = await createActivityService(userId, req.body);

    res.status(201).json({
      message: "Create activity successfully",
      data: newActivity,
    });
  } catch (error) {
    if (error.message === "Day not found or unauthorized") {
      return res.status(404).json({ message: error.message });
    }
    if (
      error.message === "dayId is required" ||
      error.message === "locationName is required" ||
      error.message.startsWith("Invalid activityType")
    ) {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
};

// 5.2 PUT /activities/:activityId
export const updateActivity = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?.userId;
    const { activityId } = req.params;

    const updatedActivity = await updateActivityService(
      activityId,
      userId,
      req.body
    );

    if (!updatedActivity) {
      return res
        .status(404)
        .json({ message: "Activity not found or unauthorized" });
    }

    res.status(200).json({
      message: "Update activity successfully",
      data: updatedActivity,
    });
  } catch (error) {
    if (error.message.startsWith("Invalid activityType")) {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
};

// 5.3 DELETE /activities/:activityId
export const deleteActivity = async (req, res, next) => {
  try {
    const userId = req.user?.id || req.user?.userId;
    const { activityId } = req.params;

    const deletedActivity = await deleteActivityService(activityId, userId);

    if (!deletedActivity) {
      return res
        .status(404)
        .json({ message: "Activity not found or unauthorized" });
    }

    res.status(200).json({
      message: "Delete activity successfully",
    });
  } catch (error) {
    next(error);
  }
};